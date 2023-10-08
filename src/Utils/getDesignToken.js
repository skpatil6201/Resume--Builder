import { createTheme } from '@mui/material/styles';
import { themes as designs } from './../Data/themes';

/**
 * Get design token for current given mode.
 * 
 * @param String mode
 * @returns '@mui/material/styles' -> createTheme
 */
export function getDesignToken(mode)
{
    return createTheme({
        palette: { mode,
          ...designs.themes[mode]
        }
    });
}