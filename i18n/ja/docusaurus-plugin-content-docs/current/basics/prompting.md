---
sidebar_position: 1
---
#   プロンプティング

前章では、AIについて、人間が AI にタスクを指示する方法について説明しました。
AI にタスクを指示することをプロンプト(@shin2020autoprompt)と呼びます。私たちは AI にプロンプトと呼ばれる一連の指示を受けると、そのタスクを実行します。プロンプトには、質問のようなシンプルなものから、複数段落にわたるような複雑なものまで色々あります。 

以下は、プロンプトの2つの例です。

#### 1) 論文の要約

あなたがフロリダの降雪に関する記事[^2]を読んでいるとします。記事の概要をさっと把握するために、AI に記事を読み込ませ、要約するように指示します。

```
It is very rare for snow to fall in the U.S. state of Florida, especially in the central and southern portions of the state. With the exception of the far northern areas of the state, most of the major cities in Florida have never recorded measurable snowfall, though trace amounts have been recorded, or flurries in the air observed few times each century. According to the National Weather Service, in the Florida Keys and Key West there is no known occurrence of snow flurries since the European colonization of the region more than 300 years ago. In Miami, Fort Lauderdale, and Palm Beach there has been only one known report of snow flurries observed in the air in more than 200 years; this occurred in January 1977. In any event, Miami, Fort Lauderdale, and Palm Beach have not seen snow flurries before or since this 1977 event.

Summarize this paragraph in a single sentence:
```

以下がAIのレスポンスです。とても短くなりました。

<pre>
<div className="bluegreen-highlight">
Snowfall is extremely rare in Florida, with the exception of the far northern areas, <br/>and only one instance of snow flurries in the air has been recorded in the major cities <br/>of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.
</div>
</pre>

#### 2) 数学の単語問題解決

言語モデルに解かせたい数式のがある場合、"What is EQUATION" という形式でプロンプトを作成できます。

ある問題を解くために次のようなプロンプトを作成したとします。

```
What is 965*590?
```

このプロンプトに対して、GPT-3 (text-davinci-003) (AI) は、569,050 と誤答することがあるそうです。そこで、プロンプトエンジニアリングの出番です。

# プロンプトエンジニアリング

もし、`What is 965*590? (965*590は何ですか?)` と尋ねる代わりに、`Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct: (あなたの答えが正確であることを確認してください。965*590 は何ですか？あなたの答えが正確であることを確認してください:)` と尋ねると GPT-3 は `569350` と正解します。
なぜこのようなことが起こるのでしょうか？なぜAIに正しい答えを出すように 2 回指示することが有用なのでしょうか？タスクで最適な結果をもたらすプロンプトを作るにはどうしたらいいのでしょうか？
特にこの最後の疑問が、プロンプト工学という分野、そしてこの講座の焦点となっています。

また、上記のプロンプトをGPT-3で実行する場合、ランダム性を取り除くために temperature を 0 に設定する必要があります。

良いプロンプトをエンジニアリングする方法を学ぶために、続きを読んでみましょう！

[^2]: https://en.wikipedia.org/wiki/Snow_in_Florida より
