# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

これは React + TypeScript で構築されたシングルページアプリケーション (SPA) です。HashRouter を使用してクライアントサイドルーティングを実装しています。

## 開発コマンド

### 基本コマンド
- `npm start` - 開発サーバーを起動 (http://localhost:3000)
- `npm run build` - 本番用ビルドを作成
- `npm test` - Jestでユニットテストを実行
- `npx playwright test` - Playwrightでe2eテストを実行

### テスト関連
- `npm test -- --watch` - ウォッチモードでテストを実行
- `npm test -- --coverage` - カバレッジレポート付きでテストを実行
- `npx playwright test --ui` - PlaywrightのUIモードでテストを実行
- `npx playwright test tests/skirnir.test.ts` - 特定のテストファイルを実行

## アーキテクチャ

### ディレクトリ構造
- `src/` - ソースコード
  - `Components/` - React コンポーネント（Home, About, Services, Contact, TradeLaw, Navigation）
  - `Images/` - 画像ファイル（SNSアイコン、背景画像）
  - `App.tsx` - メインアプリケーションコンポーネント（ルーティング設定）
  - `index.tsx` - エントリーポイント

### 技術スタック
- **フレームワーク**: React 18.2.0
- **言語**: TypeScript 5.0.4
- **ルーティング**: React Router DOM 6.11.1 (HashRouter使用)
- **UIライブラリ**: React Bootstrap 2.7.4
- **ビルドツール**: Create React App (react-scripts 5.0.1)
- **テストフレームワーク**: 
  - Jest (ユニットテスト)
  - Playwright 1.34.0 (e2eテスト)

### TypeScript設定
- 厳格な型チェック有効（`noImplicitAny`, `strictNullChecks`）
- 未使用変数のチェック有効（`noUnusedLocals`）
- ソースマップ生成有効

### ルーティング構成
- `/` - Home
- `/about` - About
- `/services` - Services
- `/contact` - Contact
- `/tradelaw` - TradeLaw

### 注意事項
- Node.js 18.19.1 を使用
- HashRouter を使用しているため、本番環境でのデプロイ時にサーバー設定は不要
- Playwright テストは Chromium のみで実行（Firefox, WebKit はコメントアウト済み）