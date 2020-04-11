process.env.NODE_ENV = "test";
const db = require("../db")
const request = require("supertest");
const app = require("../app");

beforeAll(async () => {
  await db.query(
    "CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL)"
  );
});

beforeEach(async () => {
  await db.query(
    "INSERT INTO users (username, password) VALUES ('Jonathan', 'curry'), ('Scott', 'curry1') RETURNING *"
  );
});

afterEach(async () => {
  await db.query(
    "DELETE FROM users"
  );
});

afterAll(async () => {
  await db.query(
    "DROP TABLE users"
  );
  db.end();
});

describe("GET /users", () => {
  test("It responds with an array of users", async () => {
    const response = await request(app).get("/users");
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty("username");
    expect(response.body[0]).toHaveProperty("password");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /users", () => {
  test("It responds with the newly created user", async () => {
    const newUser = await request(app)
      .post("/users")
      .send({
        username: "new user",
        password: 'newpassword'
      });

    expect(newUser.body).toHaveProperty("username");
    expect(newUser.body.username).toBe("new user");
    expect(newUser.statusCode).toBe(200);

    // make sure we have 3 users now
    const response = await request(app).get("/users");
    expect(response.body.length).toBe(3);
  });
});

// describe("PATCH /users/1", () => {
//   test("It responds with an updated user", async () => {
//     const newUser = await request(app)
//       .post("/users")
//       .send({
//         name: "Another one"
//       });
//     const updatedUser = await request(app)
//       .patch(`/users/${newUser.body.id}`)
//       .send({ name: "updated" });
//     expect(updatedUser.body.name).toBe("updated");
//     expect(updatedUser.body).toHaveProperty("id");
//     expect(updatedUser.statusCode).toBe(200);

//     // make sure we have 3 users
//     const response = await request(app).get("/users");
//     expect(response.body.length).toBe(3);
//   });
// });

// describe("DELETE /users/1", () => {
//   test("It responds with a message of Deleted", async () => {
//     const newUser = await request(app)
//       .post("/users")
//       .send({
//         name: "Another one"
//       });
//     const removedUser = await request(app).delete(
//       `/users/${newUser.body.id}`
//     );
//     expect(removedUser.body).toEqual({ message: "Deleted" });
//     expect(removedUser.statusCode).toBe(200);

//     // make sure we still have 2 users
//     const response = await request(app).get("/users");
//     expect(response.body.length).toBe(2);
//   });
// });