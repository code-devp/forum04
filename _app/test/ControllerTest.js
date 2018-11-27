import { expect } from "chai";
import Controller from "../src/Controller";

describe("Controller", () => {
  const controller = new Controller("src/developers.json");

  describe("getDevelopers", () => {
    it("returns all developers", () => {
      const developers = controller.getDevelopers();
      expect(developers.totalRecords).to.equal(4);
      expect(developers.totalPages).to.equal(1);
      expect(developers.page).to.equal(1);
      expect(developers.records.length).to.equal(4);
    });

    it("returns matched by name", () => {
      const developers = controller.getDevelopers("Sohrab");
      expect(developers.records.length).to.equal(1);
      expect(developers.records[0].name).to.equal("Sohrab");
    });

    it("returns matched by team", () => {
      const developers = controller.getDevelopers(null, "Team Jacob");
      expect(developers.records.length).to.equal(1);
      expect(developers.records[0].name).to.equal("Sohrab");
    });

    it("returns no matches", () => {
      const developers = controller.getDevelopers("Diana");
      expect(developers.totalRecords).to.equal(0);
      expect(developers.records.length).to.equal(0);
    });
  });

  describe("getDeveloper", () => {
    it("returns the developer", () => {
      const developer = controller.getDeveloper("1");
      expect(developer.name).to.equal("Sohrab");
    });

    it("returns no developer", () => {
      const developer = controller.getDeveloper("5");
      expect(developer).to.be.undefined;
    });
  });
});
