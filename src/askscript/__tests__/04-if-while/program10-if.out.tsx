import * as askjsx from "../../../askjsx";

export const expectedOutput = (
  <ask>
    <if condition={<call name={'lessThan'} args={[<ref name={'n'} />,2]} />}>
      <return value={<ref name={'n'} />} />
    </if>
    <return value={<ref name={'n'} />} />
  </ask>
);
