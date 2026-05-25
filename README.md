# 머신러닝을 위한 수학 기초

이 저장소는 머신러닝을 이해하는 데 필요한 기초 수학 개념을 강의식으로 정리하는 Lecture 시리즈 작업 공간입니다. 선형대수, 미분과 최적화, 확률, 베이즈 정리, 정보이론을 따로 외우는 대신, 모델이 데이터를 표현하고 학습하며 예측을 해석하는 흐름 안에서 다룹니다.

현재 자료는 사내 강의 준비 과정에서 만든 강의노트 초안과 렌더링 산출물을 정리한 상태입니다. 앞으로 예제, 그림, 실습 코드, 연습문제, 강사용 설명을 계속 보강해 실제 강의노트로 다듬을 예정입니다.

## 바로 보기

- GitHub Pages: <https://infant83.github.io/ML_math/>
- 강의 목차: <https://infant83.github.io/ML_math/#route>
- 강의 챕터: <https://infant83.github.io/ML_math/#chapters>
- 핵심 정리: <https://infant83.github.io/ML_math/#takehome>

Pages는 강의 소개용 랜딩 페이지가 아니라 강의자료를 바로 읽기 위한 정적 웹페이지입니다. 홈에서는 전체 목차와 챕터 카드를 먼저 보여 주고, 각 챕터 상세 페이지에서는 도입부, 학습 목표, 원본 HTML 강의노트, 핵심 수식, 강의 진행 방식으로 이어지도록 구성했습니다.

## 강의의 두 축

### 판별모델 수학

Lecture 1은 `x`에서 `y`를 직접 예측하는 판별모델의 수학을 다룹니다. 데이터를 벡터와 행렬로 표현하고, 특성 공간 위에서 결정경계를 해석하며, 손실함수와 그래디언트로 학습 방향을 계산합니다. 선형모형, 차원축소, 신경망의 기초도 이 흐름 안에서 연결합니다.

핵심 개념:

- 벡터 공간, 내적, norm, 거리
- 행렬, 선형변환, 고유값, SVD
- 손실함수, 그래디언트, 헤시안
- 제약 최적화, KKT 조건, 정규화
- 선형회귀, 로지스틱 회귀, 결정경계
- PCA, 역전파, SGD, Adam
- ROC/AUC, 혼동행렬, 판별모델 평가

### 생성모델 수학

Lecture 2는 데이터와 라벨의 불확실성을 확률분포로 해석하는 생성모델의 수학을 다룹니다. 조건부 확률과 베이즈 갱신에서 출발해 우도, 사후분포, 엔트로피, 교차 엔트로피, KL divergence, 베이즈 의사결정으로 이어집니다.

핵심 개념:

- 확률, 사건, 조건부 확률, 독립성
- 전확률정리, 베이즈 정리
- 확률변수와 주요 분포
- MLE, MAP, 사전분포와 정규화
- 정보량, 엔트로피, 교차 엔트로피
- 로그우도, KL divergence
- 베이즈 위험, 비용민감 의사결정, calibration

## 저장소 구성

| 위치 | 내용 | 상태 |
| --- | --- | --- |
| [`Lecture-1 선형대수, 미적분, 판별적모델`](<Lecture-1 선형대수, 미적분, 판별적모델>) | 판별모델을 위한 선형대수, 미분, 최적화, 선형모형, 차원축소, 신경망, 캡스톤 | 8개 장의 원천 강의노트와 HTML/PDF/DOCX 산출물 |
| [`Lecture-2 엔트로피, 베이지안, 생성적모델`](<Lecture-2 엔트로피, 베이지안, 생성적모델>) | 확률, 베이즈, 정보이론, KL divergence, 베이즈 의사결정 | 3개 장의 원천 강의노트와 HTML/PDF/DOCX 산출물 |
| [`chapters`](<chapters>) | GitHub Pages용 챕터 상세 페이지 | 각 챕터별 정적 진입점 |
| [`assets`](<assets>) | 사이트 스크립트, 스타일, 강의 비주얼, public metrics 연동 | Pages UI 자산 |
| 루트 DOCX/PPTX/노트북 | 강의 발표자료와 편집본 후보 | 초안 자산 |

## Lecture 1 구성

| 장 | 상세 페이지 | 원천 강의노트 | 핵심 주제 |
| --- | --- | --- | --- |
| 1 | [`l1-ch01`](<chapters/l1-ch01/>) | [`chapter1_introduction_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter1_introduction_lecturenote.md>) | 머신러닝 문제 설정, 특성 공간, 가설, 손실함수, 판별모형 |
| 2 | [`l1-ch02`](<chapters/l1-ch02/>) | [`chapter2_linear_algebra_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter2_linear_algebra_lecturenote.md>) | 벡터, 행렬, 선형변환, 고유값/고유벡터, SVD, PCA 직관 |
| 3 | [`l1-ch03`](<chapters/l1-ch03/>) | [`chapter3_optimization_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter3_optimization_lecturenote.md>) | 다변수 미분, 그래디언트, 헤시안, 경사하강법, 뉴턴법, BFGS |
| 4 | [`l1-ch04`](<chapters/l1-ch04/>) | [`chapter4_Convex_Optimization_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter4_Convex_Optimization_lecturenote.md>) | 제약 최적화, 라그랑주 승수, KKT 조건, 볼록집합, 투영 |
| 5 | [`l1-ch05`](<chapters/l1-ch05/>) | [`chapter5_linear_models_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter5_linear_models_lecturenote.md>) | 선형회귀, 정규화, 로지스틱 회귀, 로짓, 결정경계 |
| 6 | [`l1-ch06`](<chapters/l1-ch06/>) | [`chapter6_dimensionality_reduction_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter6_dimensionality_reduction_lecturenote.md>) | PCA, 공분산, 투영과 재구성, 저랭크 근사, 데이터 구조 해석 |
| 7 | [`l1-ch07`](<chapters/l1-ch07/>) | [`chapter7_neural_networks_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter7_neural_networks_lecturenote.md>) | 계산 그래프, 역전파, SGD, 미니배치, Adam |
| 8 | [`l1-ch08`](<chapters/l1-ch08/>) | [`chapter8_capstone_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter8_capstone_lecturenote.md>) | 날씨 데이터 로지스틱 회귀, ROC/AUC, 혼동행렬, PCA 시각화 |

## Lecture 2 구성

| 장 | 상세 페이지 | 원천 강의노트 | 핵심 주제 |
| --- | --- | --- | --- |
| 1 | [`l2-ch01`](<chapters/l2-ch01/>) | [`chapter1_probability_bayesian_thinking_lecture_notes.md`](<Lecture-2 엔트로피, 베이지안, 생성적모델/chapter1_probability_bayesian_thinking_lecture_notes.md>) | 확률, 조건부 확률, 베이즈 정리, 확률변수, MLE/MAP |
| 2 | [`l2-ch02`](<chapters/l2-ch02/>) | [`chapter2_information_theory_loss_functions_lecture_notes.md`](<Lecture-2 엔트로피, 베이지안, 생성적모델/chapter2_information_theory_loss_functions_lecture_notes.md>) | 정보량, 엔트로피, 교차 엔트로피, 로그우도, KL divergence |
| 3 | [`l2-ch03`](<chapters/l2-ch03/>) | [`chapter3_bayesian_decision_lecture_notes.md`](<Lecture-2 엔트로피, 베이지안, 생성적모델/chapter3_bayesian_decision_lecture_notes.md>) | 베이즈 위험, 비용민감 학습, GLM, calibration, 확률 예측 평가 |

## Pages 구성

- 루트 [`index.html`](<index.html>)은 강의 전체 진입점입니다.
- 챕터 정보와 상세 페이지 콘텐츠는 [`assets/course-data.js`](<assets/course-data.js>)에서 관리합니다.
- 각 챕터 상세 페이지는 `chapters/<chapter-id>/index.html` 경로로 제공합니다.
- 상세 페이지는 원천 HTML 강의노트 본문을 불러와 현재 사이트 디자인 안에서 함께 보여 줍니다.
- 요약 인포그래픽은 판별모델과 생성모델을 두 흐름으로 나누어 보여 줍니다.
- `학습목표 self-check`는 브라우저 로컬 저장소에만 체크 상태를 저장합니다.
- 방문 통계는 공개 Pages 환경에서만 기록합니다.

## 현재 초안의 성격

- Markdown 파일은 강의 내용의 원천 텍스트입니다.
- HTML/PDF/DOCX는 배포와 검토를 위한 렌더링 산출물입니다.
- PPTX와 루트 DOCX는 발표자료 또는 편집본 후보입니다.
- 일부 파일에는 초안 단계의 흔적이 남아 있을 수 있습니다. 공개 강의자료로 정리할 때는 본문 흐름에 맞게 다듬거나 강사용 메모로 분리할 예정입니다.

## 향후 업데이트 계획

1. 각 장의 도입부를 더 강의식으로 다듬고, 왜 이 개념을 배우는지 먼저 보이게 정리합니다.
2. 수식 전개는 직관, 정의, 모델 연결, 짧은 계산 예제 순서로 보강합니다.
3. 판별모델과 생성모델의 차이를 챕터마다 반복해서 확인할 수 있도록 예제와 그림을 추가합니다.
4. Python 실습은 해당 장의 수학 개념을 직접 구현하는 방향으로 정리합니다.
5. 각 장 끝에 체크포인트 질문과 연습문제를 추가합니다.
6. Markdown 원천을 기준으로 HTML/PDF/DOCX 산출물을 다시 맞춥니다.

## 작업 기준

- 강의 내용 수정은 가능한 한 Markdown 원천 파일에서 시작합니다.
- Pages 구성이나 챕터 구조를 바꾸면 README도 함께 갱신합니다.
- 공개용 문서에는 내부 작업 흔적이나 생성 과정 설명을 남기지 않습니다.
- 저장소 작업 방침은 [`AGENTS.md`](<AGENTS.md>)를 따릅니다.
