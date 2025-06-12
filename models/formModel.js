
const db = require("../db/connection");

async function getFormFields(formId) {
  const [rows] = await db.query("SELECT * FROM fields WHERE form_id = ?", [formId]);
  return rows;
}

async function getForm(formId) {
  const [rows] = await db.query("SELECT * FROM forms WHERE id = ?", [formId]);
  return rows[0];
}

async function createForm(name) {
  const [result] = await db.query("INSERT INTO forms (name) VALUES (?)", [name]);
  return result.insertId;
}

async function addField(formId, name, type, options) {
  await db.query(
    "INSERT INTO fields (form_id, field_name, field_type, field_options) VALUES (?, ?, ?, ?)",
    [formId, name, type, options || ""]
  );
}

module.exports = {
  getFormFields,
  getForm,
  createForm,
  addField,
};
