const RegExpValidator = {
  DECIMAL: new RegExp(/^(\d*\.)?\d+$/),
  NUMBER: new RegExp(/^$|^[0-9]*$/),
  SERVER_VERSION: new RegExp(/^[\d.]+[\d]$/),
  TEXT: new RegExp(/[-a-zA-Z0-9 ~`!@#$%^&*()_+={}|\[\];:'"<>?,./\\]*/),
  URL: new RegExp(
    /^$|^((\w+\.)?\w+\.\w+|((2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.){3}(2[0-5]{2}|1[0-9]{2}|[0-9]{1,2}))(\/)?$/
  )
};

export default RegExpValidator;
