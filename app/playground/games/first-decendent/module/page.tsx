import { FirstDecendentModuleView } from 'src/components/templates/FirstDecendentModuleView';
import { FirstDecendentModule } from 'src/types/firstDecendent';

const FirstDecendentModulePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const moduleData = require('src/json/first-decendent-module.json.json') as FirstDecendentModule[];

  return <FirstDecendentModuleView moduleData={moduleData} />;
};

export default FirstDecendentModulePage;
