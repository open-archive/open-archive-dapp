import defaultRouter from './defaultRouter';
import counter from './counter';
import './favicon';

import Feature from './connector';

export default new Feature(defaultRouter, counter);
