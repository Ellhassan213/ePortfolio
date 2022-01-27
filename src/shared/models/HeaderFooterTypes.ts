export interface LinkProps {
  name: string,
  link: string
}

export interface ContentSchemeProps {
  backgroundColor?: string,
  color?: string,
  $fullPageDisplay?: boolean,
  image?: string,
  caption?: string,
  footerContents?: LinkProps[]
}

export interface DisplayProps {
  $display: boolean
}
