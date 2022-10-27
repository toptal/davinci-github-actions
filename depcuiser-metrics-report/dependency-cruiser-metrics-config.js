module.exports = {
  options: {
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: 'tsconfig.depcruiser.json',
    },
    doNotFollow: 'node_modules',
    exclude: {
      path:
        '(stories|dist|coverage|__[a-z]+__|_fixtures|cypress|_jest|_nyc|_scripts|scripts|tmp|_templates|.storybook|.testbox|ci|docs)',
    },
    reporterOptions: {
      metrics: {
        hideModules: false, // hides the modules from the metrics reporter output
        hideFolders: false, // would hide folders from the metrics reporter output
        orderBy: 'name', // possible values: name, moduleCount, afferentCouplings, efferentCouplings, instability
      },
    },
  },
}
