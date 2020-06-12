// Schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import the documents type
import projects from './documents/projects';
import field from './documents/field';
import informations from './documents/informations';

// Import the components
import feature from './components/feature';
import header from './components/header';
import imageText from './components/imageText.js';
import imageFullpage from './components/imgFullpage';
import largeText from './components/largeText';
import table from './components/table';
import textImage from './components/texImage';
import doubleImage from './components/doubleImage';
import itemCell from './documents/tableItem'
import footer from './documents/footer'
import footerItem from './documents/footerItem'


export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* DOCUMENTS */
    projects,
    field,
    informations,
    footer,

    
    /* COMPONENTS */
    header,
    feature,
    imageText,
    imageFullpage,
    largeText,
    table,
    textImage,
    doubleImage,
    itemCell,
    footerItem
  ])
})
