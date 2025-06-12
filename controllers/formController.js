const db = require('../connections/db');

const renderCreateForm = async (req, res) => {
  try {
    res.render('createForm');
  } catch (error) {
    console.error('Error rendering create form:', error);
    res.status(500).json({ success: false, message: 'Error rendering form' });
  }
};

const createForm = async (req, res) => {
  try {
    const { formName, fields } = req.body;

    if (!formName || !Array.isArray(fields) || fields.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Form name and at least one field are required',
      });
    }

    const [formResult] = await db.query('INSERT INTO forms (name) VALUES (?)', [formName]);
    const formId = formResult.insertId;

    for (const field of fields) {
      await db.query(
        'INSERT INTO fields (form_id, name, type, options) VALUES (?, ?, ?, ?)',
        [formId, field.name, field.type, field.options || '']
      );
    }

    res.status(201).json({
      success: true,
      message: 'Form created successfully',
      link: `/form/${formId}`,
    });
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

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
