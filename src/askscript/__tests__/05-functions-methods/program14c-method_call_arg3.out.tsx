import * as askjsx from '../../../askjsx';
askjsx;

export const expectedOutput = (
  <ask>
    <call name={'plus'} args={[<ref name={'a'} />, 'a']} />
  </ask>
);