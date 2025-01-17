---
sidebar_position: 1
--- 

#   检测AI生成的文本

对于安全研究人员和教育工作者等人来说，检测AI生成的文本是一个大问题。像[GPTZero](https://gptzero.me)、[GPT2检测器](https://openai-openai-detector.hf.space)和[双语检测器](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection)等工具已经取得了显著的成功，但是它们还是可以被[欺骗](https://learnprompting.org/docs/miscl/trickery)。

OpenAI和其他研究人员(@bansal2022certified)(@gu2022watermarking) 正在努力将统计数字水印引入它们生成的文本中，但这也可能被修改大量文本的方法欺骗。

AI文本检测的问题可能会成为一场军备竞赛，因为随着新模型和新检测方法的推出，这个问题也会不断更新。许多公司已经开始构建他们声称非常有效的解决方案，但是随着时间的推移，很难证明这一点，特别是因为模型会发生变化。

本文将介绍一些当前用于检测AI生成文本的方法，下一篇文章将讨论一些人们发现的愚弄它们的方法。

## OpenAI文本分类器

[OpenAI文本分类器](https://platform.openai.com/ai-text-classifier) 是一种相当不错的通用AI文本检测器。通过将模型训练在大量的AI生成数据和同等质量的人类写作文本上，检测器能够计算任何给定文本是由LLM创建的可能性。

它有一些限制，比如，它不接受任何少于1000个单词的提交，文本可以很容易地被编辑以干扰概率计算，由于其训练集更专业化，所以它难以处理儿童或非英语使用者创建的文本。

它目前仅有9%的人工文本被标记为AI生成的文本，正确识别AI生成的文本的概率为约26%。随着模型的不断增强和扩大范围，这些数字将会提高，但可能需要更具体的检测器来充分评估文本是否生成。

## 数字水印方法

一种检测AI生成文本的方法需要在生成文本时引入统计数字水印。这些技术可能使用LLM“白名单”，这是一种确定文本是否由特定AI模型生成的方法。水印通过在生成单词之前选择一组随机的“绿色”标记，并在抽样过程中轻轻地促进使用所选的标记。这些加权值对生成的质量影响很小，但可以被另一个LLM算法检测到(@kirchenbauer2023watermarking) 。

这是一个有趣的想法，但需要模型的创建者将此框架实现到他们的LLM中。如果模型没有内置水印，这种方法将不起作用。

## DetectGPT

[DetectGPT](https://detectgpt.ericmitchell.ai/)(@mitchell2023detectgpt) 方法能够以更少的设置检测到AI生成的文本。研究人员发现LLM文本生成倾向于“占据模型的对数概率函数的负曲率区域”。因此，可以创建一个基于曲率的系统来确定一个文本块是否是程序生成的。

它的工作原理是从被认为生成文本的模型中计算对数概率，并将它们与来自另一个预先训练的通用语言模型的文本的随机更改进行比较。这样，DetectGPT能够仅使用概率曲线来确定段落生成的可能性！

## 注意

有关检测器和人们如何愚弄它们的讨论，请参见[此文章](https://learnprompting.org/docs/miscl/trickery)。
