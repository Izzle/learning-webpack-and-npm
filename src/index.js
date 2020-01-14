/* Because the string 'jquery' is not prefixed with a directory traversal syntax,
*  Node knows that it should find a module in the node_modules directory instead. */
import $ from 'jquery';

/* Example of loading a local file or folder with webpack commented below:
** import fooModule from './fooModule'; <-- if we were importing a local file.
*                                      notice with Webpack we don't use the '.js' extension for importing
*/
function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);