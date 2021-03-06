/** @flow */
import { loadScope, Scope } from '../../../scope';
import Component from '../../../scope/models/component';
import BitObject from '../../../scope/objects/object';

export default (async function catScope(path: string, full: boolean): Promise<BitObject[] | Component[]> {
  const scope: Scope = await loadScope(path);
  // $FlowFixMe
  return full ? scope.objects.list() : scope.objects.listComponents();
});
