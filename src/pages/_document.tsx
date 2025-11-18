import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      {/* O <body> é controlado pelo _app.tsx
        As fontes são carregadas pelo next/font no _app.tsx
      */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}