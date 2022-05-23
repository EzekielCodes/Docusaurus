/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = {
  mySidebar: [
    // Normal syntax:
    // {
    //   type: 'doc',
    //   id: 'grepWorkshop', // document ID
    //   label: 'Getting started', // sidebar label
    // },

    {
      'GREP': ['grepWorkshop','docs-intro','docs-grepOefening','docs-grepForensics','docs-grepForensicsTweede','docs-grepAdvanced'],
    },
    //docs\grepSecondPage
    //strings picoctf.pcapng | grep "picoCTF"
    // Shorthand syntax:
    //'testPage', // document ID
  ],
};
