# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

スキルニル株式会社のコーポレートサイト。**Astro** で構築した静的サイト (SSG) です。全ページをビルド時に純粋な HTML として生成し、訪問者へ配信する JavaScript はほぼゼロ (モバイルナビの開閉トグルのみ)。Cloudflare Pages で配信しています。

> 旧構成は React 18 + Create React App + React Router (HashRouter) の SPA でした。コンテンツが完全に静的なこと・`react-scripts` のメンテナンス終了・HashRouter による URL/SEO 上の不利を理由に Astro へ移行しました。

## 開発コマンド

### 基本コマンド
- `npm start` / `npm run dev` - 開発サーバーを起動 (http://localhost:4321)
- `npm run build` - 本番用ビルドを `dist/` に生成
- `npm run preview` - ビルド成果物をローカルでプレビュー
- `npm run check` - `astro check` で型・診断チェック
- `npm test` - Playwright で e2e テストを実行 (内部でビルド→preview を起動)

### テスト関連
- `npx playwright test --ui` - Playwright の UI モードで実行
- `npx playwright test tests/skirnir.test.ts` - 特定のテストファイルを実行

## アーキテクチャ

### ディレクトリ構造
- `src/`
  - `pages/` - 各ページ (`index`/`about`/`services`/`contact`/`tradelaw`.astro)。ファイルベースルーティング
  - `layouts/Layout.astro` - 共通の `<head>` と下部固定ナビバー
  - `styles/global.css` - 全体スタイル (背景画像・SNSアイコン等)
- `public/` - そのまま配信される静的アセット (`images/`, `favicon.ico`, `manifest.json`)
- `astro.config.mjs` - Astro 設定 (`site` を含む)

### 技術スタック
- **フレームワーク**: Astro 5 (静的サイト生成)
- **言語**: TypeScript (`astro/tsconfigs/strict` を継承)
- **ルーティング**: ファイルベース (`src/pages/`)。実 URL (`/about/` 等)
- **スタイル**: Bootstrap 5 の CSS のみ流用 (React Bootstrap / Bootstrap JS は不使用)
- **テスト**: Playwright (Chromium のみ)

### ルーティング構成
- `/` - Home
- `/about/` - About
- `/services/` - Services
- `/contact/` - Contact
- `/tradelaw/` - 特定商取引に基づく表記

### デプロイ (Cloudflare Pages)
- ビルドコマンド: `npm run build`、出力ディレクトリ: **`dist`**
- Node バージョンは `.node-version` で固定

### 注意事項
- モバイルのナビ開閉は Bootstrap JS ではなく `Layout.astro` 内の数行の自前スクリプトで実装
- Google Analytics は旧 Azure CI でトラッキング ID を差し込んでいたため移行時に削除済み。再導入する場合は `Layout.astro` の `<head>` に GA4 タグを追加する
