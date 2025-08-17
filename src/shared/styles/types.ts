export type SpaceToken =
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '8'
    | '10'
    | '12'
    | '16'

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type FontSizeToken = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'

export type FontWeightToken = 'normal' | 'medium' | 'semibold' | 'bold'

export type LineHeightToken = 'tight' | 'normal' | 'relaxed'

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg'

export type ComponentVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'

export const getSpaceValue = (token: SpaceToken): string =>
    `var(--space-${token})`
export const getRadiusValue = (token: RadiusToken): string =>
    `var(--radius-${token})`
export const getFontSizeValue = (token: FontSizeToken): string =>
    `var(--font-size-${token})`
export const getFontWeightValue = (token: FontWeightToken): string =>
    `var(--font-weight-${token})`
export const getLineHeightValue = (token: LineHeightToken): string =>
    `var(--line-height-${token})`
