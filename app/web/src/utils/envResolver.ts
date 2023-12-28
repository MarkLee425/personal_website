const development: boolean =
  !import.meta.env.MODE || import.meta.env.MODE === "development";

export default function isDev(): boolean {
  return development;
}
