const db = require('../db/connection');

// Render the Create Form page
const renderCreateForm = async (req, res) => {
  try {
    res.render('createForm', { formLink: null }); // add default formLink
  } catch (error) {
    console.error('Error rendering create form:', error);
    res.status(500).json({ success: false, message: 'Error rendering form' });
  }
};

// Create a new form
const createForm = async (req, res) => {
  try {
    const { formName, fields } = req.body;

    if (!formName || !Array.isArray(fields) || fields.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Form name and at least one field are required',
      });
    }

    // Insert form name
    const [formResult] = await db.query('INSERT INTO forms (name) VALUES (?)', [formName]);
    const formId = formResult.insertId;

    // Insert each field
    for (const field of fields) {
      await db.query(
        'INSERT INTO fields (form_id, name, type, options) VALUES (?, ?, ?, ?)',
        [formId, field.name, field.type, field.options || '']
      );
    }

    // After successful creation, render the same page with the shareable link
    res.render('createForm', {
      formLink: `/form/${formId}`,
    });
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

// Render a specific form for filling
const renderForm = async (req, res) => {
  try {
    const formId = req.params.id;

    const [formResult] = await db.query('SELECT * FROM forms WHERE id = ?', [formId]);
    const [fieldsResult] = await db.query('SELECT * FROM fields WHERE form_id = ?', [formId]);

    if (formResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Form not found',
      });
    }

    res.render('form', {
      form: formResult[0],
      fields: fieldsResult,
    });
  } catch (error) {
    console.error('Error rendering form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

module.exports = { renderCreateForm, createForm, renderForm };
