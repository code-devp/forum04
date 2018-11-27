import fs from "fs";

/**
 * Controller implementing the API
 */
export default class Controller {
  constructor(filePath) {
    this.developers = JSON.parse(fs.readFileSync(filePath));
  }

  getDevelopers(name, team, skills, page, pageSize, sort) {
    // TODO implement skills, page, pageSize and sort
    const records = this.developers.filter(
      x =>
        (!name || (name && x["name"] === name)) &&
        (!team || (team && x["team"] === team))
    );
    return {
      totalRecords: records.length,
      totalPages: 1,
      page: 1,
      records
    };
  }

  getDeveloper(id) {
    return this.developers.find(x => x["id"] === id);
  }
}
