import {FunctionsBuilder} from '@wix/serverless-api';



export const helloWorld = (functionBuilder: FunctionsBuilder) => {
  functionBuilder.withContextPath('shilo-serverless')
    .addWebFunction('GET', '/hello-world', async (_ctx, _req) => {
      return 'Hello Shilo'
    })
}
