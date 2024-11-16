import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useState } from "react";

export const COLORS: { [key: string]: string } = {
  D: "#FF7569",
  V: "#B1E360",
  Y: "#50D9CA",
  G: "#FFC161",
  L: "#FDE962",
  E: "#FB74A7",
  H: "#5999F2",
  W: "#55CBF3",
  N: "#E67FFF",
  A: "#E5F265",
  T: "#FBA566",
  K: "#9169E9",
  M: "#62E76A",
  C: "#E8E15A",
  I: "#9CE762",
  Q: "#F27ACE",
  P: "#FFD36D",
  R: "#656FFF",
  F: "#63E9A4",
  S: "#FF8B62",
};

type FastaData = {
  [id: string]: string;
};

export default function MSAdata() {
  const [fastaData, setFastaData] = useState<FastaData | null>(null);

  const parseFastaString = (fastaString: string): FastaData => {
    const sequences = fastaString.split(">");
    const jsonSequences: FastaData = {};

    sequences
      .filter((sequence) => sequence.trim().length > 0)
      .forEach((sequence) => {
        const [header, ...sequenceLines] = sequence.split("\n");
        const sequenceString = sequenceLines.join("");
        jsonSequences[header.trim()] = sequenceString.trim();
      });

    return jsonSequences;
  };

  const getRepeatingSymbols = (sequence: string) => {
    const counts: { [key: string]: number } = {};
    for (const char of sequence) {
      counts[char] = (counts[char] || 0) + 1;
    }
    return Object.entries(counts)
      .filter(([_, count]) => count > 1)
      .map(([char, count]) => `${char}(${count})`)
      .join(", ");
  };

  const handleFileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const parsedData = parseFastaString(e.target.result as string);
          setFastaData(parsedData);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <div>
        <Button
          sx={{ m: 1, background: "#ba000d", boxShadow: 2 }}
          variant="contained"
          component="label"
          endIcon={<FileUploadIcon />}
        >
          <input type="file" hidden onChange={handleFileLoad} />
          UPLOAD
        </Button>
      </div>

      {fastaData ? (
        <div

        >
          <h3 style={{ textAlign: "center" }}>Dane FASTA:</h3>
          <table
            style={{
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid", padding: "8px" }}>Identyfikator</th>
                <th style={{ border: "1px solid", padding: "8px" }}>Sekwencja</th>
                {/* <th style={{ border: "1px solid", padding: "8px" }}>Powtarzające się symbole</th> */}
              </tr>
            </thead>
            <tbody style={{overflowX:"auto"}}> 
              {Object.entries(fastaData).map(([id, sequence], rowindex) => (
                <tr key={id}>
                  <td
                    style={{
                      border: "1px solid",
                      fontWeight: "bold",
                      padding: "8px",
                    }}
                  >
                    {id}
                  </td>
                  <td
                    style={{
                      display: "flex",
                      border: "1px solid",
                      textAlign: "left",
                    }}
                  >
                    {sequence.split("").map((char, index) => (
                      <span
                        key={index}
                        style={{
                          width: "14px",
                          display: "inline-block",
                          textAlign: "center",
                          borderRight: "1px solid",
                          backgroundColor: Object.values(fastaData)[0][index]!= char || rowindex== 0 ? COLORS[char]:"transparent",
                        }}
                      >
                        {Object.values(fastaData)[0][index]!= char || rowindex==0 ? char:""}
                      </span>
                    ))}
                  </td>
                  {/* <td
                    style={{
                      border: "1px solid",
                      padding: "8px",
                      textAlign: "center",
                    }}
                  >
                    {getRepeatingSymbols(sequence) || "Brak"}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Wybierz plik FASTA, aby zobaczyć dane.</p>
      )}
    </div>
  );
}