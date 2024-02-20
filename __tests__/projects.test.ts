import projects from "../pages/api/projects";
import { connect, getDatabase } from "../db/connection";

jest.mock("../db/connection", () => {
  return {
    connect: jest.fn(),
    getDatabase: jest.fn().mockReturnValue({
      collection: jest.fn(() => {
        return {
          find: jest.fn(() => {
            return {
              toArray: jest.fn(() => {
                return [{ id: 1, title: "shoes" }];
              }),
            };
          }),
        };
      }),
    }),
  };
});

describe("Projects", () => {
  let req, res;
  const jsonMock = jest.fn();
  beforeEach(() => {
    req = {
      method: "GET",
    };
    res = {
      json: jest.fn(),
      status: jest.fn(() => {
        return { json: jsonMock };
      }),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should test api", async () => {
    expect(projects(req, res)).toBeDefined();
  });
  it("should db connection be called", async () => {
    await projects(req, res);
    expect(connect).toHaveBeenCalled();
  });
  it("should successfully call collection", async () => {
    await projects(req, res);
    expect(getDatabase().collection).toHaveBeenCalledWith("projects");
  });
  it("should test the get method for success", async () => {
    await projects(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith([{ id: 1, title: "shoes" }]);
  });
  it("should test the get method for failure", async () => {
    await projects(!req, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });
});
