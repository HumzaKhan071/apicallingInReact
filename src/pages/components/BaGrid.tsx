type propsType = {
  data: any;
  loading: boolean;
  button: any;
  gridCols: {
    key: string;
    value: string;
  }[];
};
export default function BaGrid(props: propsType) {
  const { data, loading, gridCols } = props;
  return (
    <>
      <table>
        <thead>
          {gridCols.map((col: any) => (
            <th key={col.key}>{col.value}</th>
          ))}
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={gridCols.length}>Loading...</td>
            </tr>
          ) : (
            data.map((row: any) => (
              <tr key={row.id}>
                {gridCols.map((col: any) => (
                  <td key={col.key}>
                    {col.key === "delete" ? props.button(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
