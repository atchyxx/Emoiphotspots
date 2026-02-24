/**
 * @file Code.gs
 * @description Project EMO-SCAPE Backend
 */

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('EMO-SCAPE | Discover the Vibe')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * HTMLファイルに他のHTMLファイルをインクルードするためのヘルパー
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * モックデータ: エモいスポットのリスト
 * 実際にはGoogle Maps APIなどで取得することも可能だが、コンセプト実証のため静的データを返す
 */
function getEmoSpots(lat, lng) {
  // 本来は座標に基づいた計算を行う
  return [
    {
      name: "Twilight Observatory",
      description: "夕暮れ時、街の明かりが灯り始める瞬間の絶景スポット。",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      lat: lat + 0.005,
      lng: lng + 0.005
    },
    {
      name: "Midnight Neon Alley",
      description: "雨上がりのアスファルトに反射するネオンが、サイバーパンクな世界を演出。",
      imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
      lat: lat - 0.003,
      lng: lng + 0.002
    },
    {
      name: "Retro Vinyl Cafe",
      description: "レコードのノイズとコーヒーの香りが混ざり合う、時間を忘れる空間。",
      imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&w=800&q=80",
      lat: lat + 0.002,
      lng: lng - 0.004
    }
  ];
}
