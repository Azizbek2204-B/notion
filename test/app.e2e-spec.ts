import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { App } from "supertest/types";
import { AppModule } from "./../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication<App>;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth-admin/sign-in")
      .send({
        email: "azizbsebsk@gmail.com",
        password: "StrongPass123!",
        roles: "superadmin",
      });

    const userResponse = await request(app.getHttpServer())
    .post("/user/sign-up").send({

    })

    token = response.body.token;
    console.log("Token:", token);
  });

  afterAll(async () => {
    await app.close();
  });

  it("/users (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("/users (GET) --> 401 `Unauthorized`", () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

  // it("/users (POST) --> 201 `Created`", () => {
  //   return request(app.getHttpServer())
  //     .post("/users")
  //     .send({
  //       first_name: "Azizbek",
  //       email: "azizbsebsk@gmail.com",
  //       hashed_password: "StrongPass123!",
  //       refresh_token: "refreshToken456",
  //       roleId: 1,
  //       is_active: false,
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(201);
  // });

  it("/users (POST) --> 400", async () => {
    return request(app.getHttpServer())
      .post("/users")
      .send({
        first_name: "Azizbek",
        email: "azizbsebsk@gmail.com",
        hashed_password: "StrongPass123!",
        refresh_token: "refreshToken456",
        roleId: 1,
        is_active: false,
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({
        message: "Bunday emailli foydalanuvchi mavjud",
        error: "Bad Request",
        statusCode: 400,
      });
  });

  it("/users (DELETE) --> 200", async () => {
    const userId = 1;
    return request(app.getHttpServer()).delete(`/users/${userId}`).expect(200);
  });

  it ("/users (DELETE) --> 400", async ()=>{
    const userId = 1
    return request(app.getHttpServer()).delete(`/users/${userId}`).expect(404).expect({
      message:"Foydalanuvchi topilmadi",
      error:"Not Found",
      statusCode:404
    })
  })

  // it("/users/:id (GET) --> 200 OK", () => {
  //   const userId = 1;
  //   return request(app.getHttpServer())
  //     .get(`/users/${userId}`)
  //     .expect("Content-Type", /json/)
  //     .expect(200);
  // });
  
  // it("/users/:id (GET) --> 401 Not Found", () => {
  //   const userId = 1;
  //   return request(app.getHttpServer())
  //     .get(`/users/${userId}`)
  //     .expect("Content-Type", /json/)
  //     .expect(401);
  // });  

  afterAll(async () => {
    await app.close();
  });
});
