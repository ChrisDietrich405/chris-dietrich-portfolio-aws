import technologies from "../pages/api/technologies";
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

describe("Technologies", () => {
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
    expect(technologies(req, res)).toBeDefined();
  });
  it("should db be called", async () => {
    technologies(req, res);
    expect(connect).toHaveBeenCalledWith();
  });
  it("should successfully call collection", async () => {
    await technologies(req, res);
    expect(getDatabase().collection).toHaveBeenCalledWith("cards");
  });
  it("should test the get method call for success", async () => {
    await technologies(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith([{ id: 1, title: "shoes" }]);
  });
  it("should test the get method call for failure", async () => {
    await technologies(!req, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });
});
