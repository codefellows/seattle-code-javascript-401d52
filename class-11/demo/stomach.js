'use strict';

const { emitter, eventPool } = require('./eventPool');

emitter.emit(eventPool[1], { hunger: 40 });
