import * as askjsx from "../../../askjsx";

export const expectedOutput = (
  <ask>
    <while condition={<call name={'lessThan'} args={[<ref name={'n'} />,2]} />}>
      <return value={<ref name={'n'} />} />
    </while>
    <return value={<ref name={'x'} />} />
  </ask>
);
