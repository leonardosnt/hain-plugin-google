'use strict';

module.exports = (pluginContext) => {
  const shell = pluginContext.shell;

  function search(query, res) {
    const query_trim = query.trim();

    if (query_trim.length == 0) {
      return;
    }

    res.add({
      id: query_trim,
      payload: 'open',
      title: query_trim,
      desc: 'Search on Google.com'
    });
  }

  function execute(id, payload) {
    if (payload !== 'open') {
      return;
    }

    shell.openExternal(`http://www.google.com/search?q=${id}`);
  }

  return { search, execute };
};
