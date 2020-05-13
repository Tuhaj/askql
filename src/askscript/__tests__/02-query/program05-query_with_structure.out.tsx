import * as askjsx from "../../../askjsx";

export const expectedOutput = (
  <ask>
    <query>
      <leaf name={'firstName'} value={<ref name={'firstName'} />} />
      <leaf name={'lastName'} value={<call name={'concat'} args={[<call name={'upperCase'} args={[<ref name={'lastName'} />]} />,' ']} />} />
      <node name={'friends'}>
        <leaf name={'id'} value={<ref name={'id'} />} />
      </node>
    </query>
  </ask>
);
