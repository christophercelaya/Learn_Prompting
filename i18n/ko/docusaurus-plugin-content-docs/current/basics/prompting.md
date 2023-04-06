---
sidebar_position: 1
---
#   프롬프팅

이전 챕터에서 우리는 AI에 대해서 또 어떻게 AI에게 일을 지시할 지에 대해서 얘기했었습니다.
AI에게 일을 지시하는 일련의 과정을 프롬프팅(@shin2020autoprompt)이라고 부릅니다. 우리가 AI에게 지시들(프롬프트)를 말하면 AI는 일을 실행합니다.
프롬프트들은 간단하게는 질문에서 복잡하게는 여러 줄의 문단이 될 수도 있습니다.

여기 프롬프트에 대한 두 개의 예제가 있습니다.

#### 1) 기사 요약하기

여기 플로리다의 폭설에 대한 글을 읽고 있다고 가정해봅시다. 이 기사의 중점만 빠르게 알고 싶어서 AI에게 읽고 있던 것을 보여주고 요약에 대해서 물어봤습니다.
[^2]:
```
It is very rare for snow to fall in the U.S. state of Florida, especially in the central and southern portions of the state. With the exception of the far northern areas of the state, most of the major cities in Florida have never recorded measurable snowfall, though trace amounts have been recorded, or flurries in the air observed few times each century. According to the National Weather Service, in the Florida Keys and Key West there is no known occurrence of snow flurries since the European colonization of the region more than 300 years ago. In Miami, Fort Lauderdale, and Palm Beach there has been only one known report of snow flurries observed in the air in more than 200 years; this occurred in January 1977. In any event, Miami, Fort Lauderdale, and Palm Beach have not seen snow flurries before or since this 1977 event.

Summarize this paragraph in a single sentence:
```

여기 더 짧고 읽기 좋아진 AI의 답변이 있습니다.

<pre>
<div className="bluegreen-highlight">
Snowfall is extremely rare in Florida, with the exception of the far northern areas, <br/>and only one instance of snow flurries in the air has been recorded in the major cities <br/>of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.
</div>
</pre>

#### 2) 수학적 문제 해결

만약 여러분이 AI가 풀어줬으면 좋겠는 수학 방정식 데이터셋을 가지고 있다면,
여러분은 "방정식이란 무엇인가"라는 질문으로 프롬프트를 만들 수 있을 것입니다.

전체 프롬프트는 아래와 같습니다.:

```
What is 965*590?
```

이 프롬프트로 GPT-3 (text-davinci-003)는 568,050이라는 틀린 답을 내기도 하지만 이 부분이 프롬프트 엔지니어링이 필요한 지점입니다.

# 프롬프트 엔지니어링

만약 `What is 965*590?`이라고 묻는 것 대신에, `Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:`이라고 물어본다면
GPT-3는 `569350`이라는 정확한 답을 내놓을 것입니다. 왜 이렇게 될까요? 왜 AI에게 정확한 답을 내라고 두 번 반복하는 것이 도움이 될까요?
최적의 답변을 말하는 프롬프트는 어떻게 만들 수 있을까요?
이것이 바로 프롬프트 엔지니어링이 집중하는 부분입니다.


한 가지 더, 만약 GPT-3위에서 프롬프트를 실행시긴다면 여러분은 temperature을 0으로 바꿔서 랜덤성을 없애야 합니다. 

좋은 프롬프트를 만들기 위해서 더 읽어보세요!

[^2]: https://en.wikipedia.org/wiki/Snow_in_Florida 에서 가져온 글입니다.
