export default interface Props {
  type?: string,
  label?: string,
  info?: string,
  placeholder?: string,
  onChange: (e: string) => void, 
  defaultValue?: string,
}