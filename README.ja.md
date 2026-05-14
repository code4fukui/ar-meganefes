# ar-meganefes


AR meganefesは、拡張現実（AR）アプリケーション用のメガネ（megane）を作成するThree.jsベースのプロジェクトです。

## 特徴
- Three.jsを使用してメガネの3Dモデルを作成します
- メガネを生成するためのカスタマイズ可能な関数 `createMegane()` を提供します
- ARアプリケーションでの使用を想定しています

## 使用方法
`ar-meganefes` プロジェクトを使用するには、以下の手順に従ってください：

1. `createMegane.js` ファイルから `createMegane()` 関数をインポートします：

```javascript
import { createMegane } from './createMegane.js';
```

2. `createMegane()` 関数を呼び出して、メガネオブジェクトを生成します。オプションで半径パラメータを渡すことができます（デフォルトは 0.1 です）：

```javascript
const glasses = createMegane(0.5);
```

3. メガネオブジェクトをThree.jsのシーンに追加します：

```javascript
scene.add(glasses);
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
