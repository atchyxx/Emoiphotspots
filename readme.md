# EMO-SCAPE

現在地から「エモい」スポットを探して、Google Maps へつなぐ Google Apps Script 製のWebアプリです。

## 概要

- 位置情報を取得して、近くの雰囲気あるスポットを表示
- 写真映えを意識したダークテーマUI
- スポットごとに Google Maps の経路リンクを表示

## 技術スタック

- Google Apps Script
- HTML / CSS / JavaScript
- Geolocation API

## ファイル構成

- `umai/Code.gs` : サーバー側ロジック
- `umai/index.html` : 画面本体
- `umai/script.html` : フロントエンドの処理
- `umai/style.html` : スタイル定義

## 使い方

1. Google Apps Script にこのプロジェクトのファイルを配置する
2. `doGet()` を Web アプリとして公開する
3. ブラウザで開いて位置情報の利用を許可する

## 目的

5月30日に開催するイベント向けに、参加者が楽しく使える体験を目指しています。
