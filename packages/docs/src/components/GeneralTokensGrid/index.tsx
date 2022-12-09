import "./styles.css";

type Tokens = {
  [key: string]: string;
};

type GeneralTokensGridProps = {
  tokens: Tokens;
  convertRemToPix?: boolean;
  convertToSize?: boolean;
};

export const GeneralTokensGrid = ({
  tokens,
  convertRemToPix,
  convertToSize,
}: GeneralTokensGridProps) => {
  return (
    <table className="gtg-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {!!convertRemToPix && <th>Value</th>}
          {!!convertToSize && <th>Size</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            {!!convertRemToPix && (
              <td>{Number(value.replace("rem", "")) * 16}px</td>
            )}
            {!!convertToSize && (
              <td>
                <div className="gtg-container__width-td" style={{ width: `${Number(value.replace("rem", "")) * 16}px` }}></div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
