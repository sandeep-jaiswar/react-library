import { defineConfig } from 'vite';
import { commonConfig} from './common.config';
import packageFile from './package.json';

export default defineConfig(_configEnv => ({
    ...commonConfig('src','es', packageFile)
}))