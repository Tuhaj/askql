import * as askjsx from "../../../askjsx";

export const expectedOutput = (
  <ask>
    <query>
      <leaf name={'fullName'} value={<call name={'upperCase'} args={[<call name={'concat'} args={[<call name={'firstName'} args={[<ref name={'fullName'} />]} />,' ',<ref name={'lastName'} />]} />]} />} />
    </query>
  </ask>
);
