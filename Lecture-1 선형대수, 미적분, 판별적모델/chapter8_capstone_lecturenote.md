## 사고 과정

사용자의 지시를 분석하여 'Capstone: 날씨 데이터 로지스틱 회귀' 강의 노트를 작성해야 한다. 주요 내용은 다음과 같다:

1.  **강의 노트 전체 구조**:
    *   8.1 '날씨 데이터를 활용한 로지스틱 회귀, ROC 평가, PCA 시각화' 부분 상세 작성.

2.  **8.1 섹션 세부 내용**:
    *   **사례**: 날씨 데이터(습도, 기압 등)를 사용하여 다음 날 비가 올지 예측하는 로지스틱 회귀 모델 구축.
    *   **이론**:
        *   **데이터 전처리**: 결측치 처리, 특성 공학(예: `rain_today`, `rain_yesterday`, `diff_temp`, `diff_humid`), 정규화(MinMaxScaler).
        *   **로지스틱 회귀 학습**: `sklearn.linear_model.LogisticRegression` 사용, `train_test_split`을 통한 훈련/검증 데이터 분리.
        *   **모델 평가**: 혼동 행렬, 정확도, 정밀도, 재현율, F1 점수, ROC 곡선, AUC.
        *   **PCA 시각화**: `sklearn.decomposition.PCA`를 사용하여 고차원 날씨 데이터를 2D로 축소하고 시각화하여 데이터의 패턴 및 분류 가능성 탐색.
    *   **예제**:
        *   데이터 전처리 코드 스니펫 및 설명.
        *   로지스틱 회귀 모델 학습 및 예측 코드 스니펫.
        *   혼동 행렬 및 분류 보고서 출력 예시.
        *   PCA를 이용한 2D 시각화 코드 스니펫 및 결과 해석.

3.  **언어 및 스타일**:
    *   한국어로 상세하게 작성.
    *   수학적 이론과 직관적 이해를 모두 포함.
    *   자연스럽게 흐르고 논리적으로 구성.
    *   정확하고 간결하게 작성.
    *   제공된 참고 자료를 기반으로 작성.

**세부 계획**:

*   **8.1 날씨 데이터를 활용한 로지스틱 회귀, ROC 평가, PCA 시각화**:
    *   **도입**: Capstone 프로젝트의 목적 설명 (이전 강의에서 배운 개념들을 실제 데이터에 적용).
    *   **데이터셋 소개**: 날씨 데이터셋 (`NSW_weather_data_12mth.csv` 또는 유사한 Kaggle 날씨 데이터셋) 사용. 다음 날 비가 올지(`rain_tomorrow`) 예측하는 분류 문제 정의.
    *   **데이터 전처리**:
        *   결측치 처리 (`fillna` with mean).
        *   특성 공학 (`rain_today`, `rain_yesterday`, `diff_temp`, `diff_humid`, `month_number` 등).
        *   수치형 특성 정규화 (`MinMaxScaler`).
        *   훈련/검증 데이터 분리 (`train_test_split`).
        *   관련 코드 스니펫 포함.
    *   **로지스틱 회귀 모델 학습**:
        *   `LogisticRegression` 모델 초기화 및 `fit` 메서드를 이용한 학습.
        *   관련 코드 스니펫 포함.
    *   **모델 평가 및 해석**:
        *   `predict` 및 `predict_proba`를 이용한 예측.
        *   **혼동 행렬**: `confusion_matrix`를 사용하여 TP, TN, FP, FN 계산 및 시각화.
        *   **평가 지표**: `classification_report`를 사용하여 정확도, 정밀도, 재현율, F1 점수 계산 및 해석. 특히 불균형 데이터셋에서의 지표 중요성 강조.
        *   **ROC 곡선 및 AUC**: `roc_curve`, `roc_auc_score`를 사용하여 ROC 곡선 플로팅 및 AUC 값 계산. 모델의 전반적인 분류 성능 해석.
        *   관련 코드 스니펫 및 시각화 예시 포함.
    *   **PCA를 이용한 데이터 시각화**:
        *   **목적**: 고차원 날씨 데이터를 2차원으로 축소하여 시각화함으로써 데이터의 분포, 클래스 분리 가능성, 이상치 등을 직관적으로 파악.
        *   `PCA(n_components=2)`를 사용하여 주성분 추출.
        *   추출된 2개의 주성분을 사용하여 데이터 포인트들을 2D 평면에 플로팅.
        *   클래스(비/맑음)별로 색상을 다르게 하여 시각화.
        *   시각화 결과 해석: PCA가 분류 문제에 직접적인 해결책은 아니지만, 데이터의 구조를 이해하고 모델의 한계를 파악하는 데 도움을 줌.
        *   관련 코드 스니펫 및 시각화 예시 포함.
    *   **결론**: Capstone 프로젝트를 통해 이론적 지식을 실제 문제에 적용하고, 모델의 학습부터 평가, 해석까지의 전 과정을 경험했음을 강조.

이 계획을 바탕으로 강의 노트를 작성한다.
---
# Capstone: 날씨 데이터 로지스틱 회귀

이 Capstone 프로젝트에서는 이전 강의에서 학습한 머신러닝의 핵심 개념들을 실제 날씨 데이터셋에 적용하여, 다음 날 비가 올지 예측하는 분류 모델을 구축하고 평가하는 과정을 다룹니다. 특히, 로지스틱 회귀 모델을 사용하여 예측을 수행하고, ROC 곡선과 AUC를 통해 모델의 성능을 심층적으로 평가하며, PCA(주성분 분석)를 활용하여 고차원 데이터를 시각화하는 방법을 실습합니다. 이 과정을 통해 데이터 전처리부터 모델 학습, 평가, 해석에 이르는 머신러닝 파이프라인의 전반적인 흐름을 이해할 수 있습니다.

## 8.1 날씨 데이터를 활용한 로지스틱 회귀, ROC 평가, PCA 시각화

### 사례: 날씨 데이터 기반 비 예측

우리는 호주 기상청(BOM)에서 수집된 날씨 데이터셋을 활용하여, 주어진 날의 기상 조건(예: 습도, 기온, 풍속, 기압 등)을 바탕으로 다음 날 비가 올지(`RainTomorrow`) 여부를 예측하는 이진 분류 모델을 구축할 것입니다. 이는 실제 생활에서 날씨 예측의 중요성을 보여주는 대표적인 머신러닝 응용 사례입니다.

### 이론 및 구현: 전처리, 학습, 평가, 해석

#### 1. 데이터 전처리 (Data Preprocessing)

모델 학습에 앞서 데이터를 준비하는 과정은 매우 중요합니다. 여기에는 결측치 처리, 새로운 특성 생성(특성 공학), 그리고 모델이 잘 학습할 수 있도록 데이터의 스케일을 조정하는 정규화 과정이 포함됩니다.

*   **결측치 처리**: 실제 데이터에는 종종 누락된 값(결측치)이 존재합니다. 이를 처리하는 가장 간단한 방법 중 하나는 해당 특성의 평균값으로 채우는 것입니다.
*   **특성 공학 (Feature Engineering)**: 기존 특성들을 조합하거나 변형하여 새로운 특성을 생성함으로써 모델의 예측 성능을 향상시킬 수 있습니다.
    *   `rain_today`: 당일 강수량(`rain`)이 0보다 크면 1, 아니면 0으로 변환하여 이진 특성 생성.
    *   `rain_yesterday`: 전날 `rain_today` 값을 가져와 다음 날 예측에 활용.
    *   `diff_temp`: 최고 기온과 최저 기온의 차이.
    *   `diff_humid`: 최고 습도와 최저 습도의 차이.
    *   `month_number`: 날짜에서 월 정보를 추출하여 계절적 특성 반영.
*   **정규화 (Normalization)**: 특성들의 스케일이 다르면 특정 특성이 모델 학습에 과도하게 영향을 미칠 수 있습니다. `MinMaxScaler`와 같은 방법을 사용하여 모든 특성 값을 0과 1 사이로 조정합니다.
*   **훈련/검증 데이터 분리**: 모델의 일반화 성능을 평가하기 위해 전체 데이터셋을 훈련 세트와 검증 세트로 나눕니다.

**예제: 데이터 전처리 코드 스니펫**

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split

# 데이터 로드 (예시: 'NSW_weather_data_12mth.csv' 또는 유사한 날씨 데이터셋)
# observe = pd.read_csv('NSW_weather_data_12mth.csv', sep =',',index_col = 0)

# 예시 데이터프레임 생성 (실제 데이터셋을 대체)
data = {
    'date': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05']),
    'rain': [0.0, 5.2, 0.0, 1.5, 0.0],
    'ev_transpiration': [3.0, 2.5, 3.5, 2.0, 4.0],
    'pan_ev': [4.0, 3.5, 4.5, 3.0, 5.0],
    'max_temp': [25.0, 22.0, 26.0, 23.0, 27.0],
    'min_temp': [15.0, 14.0, 16.0, 13.0, 17.0],
    'max_humid': [90.0, 95.0, 85.0, 92.0, 88.0],
    'min_humid': [60.0, 70.0, 55.0, 65.0, 58.0],
    'wind': [10.0, 12.0, 8.0, 11.0, 9.0],
    'solar': [20.0, 18.0, 22.0, 19.0, 21.0]
}
observe = pd.DataFrame(data)

# 결측치 처리 (예시에서는 결측치 없음, 실제 데이터에서는 필요)
int_col = ['ev_transpiration','rain','pan_ev','max_temp','min_temp','max_humid','min_humid','wind','solar']
for col in int_col:
    observe[col] = pd.to_numeric(observe[col], errors='coerce')
    observe[col] = observe[col].astype(float)
    observe[col] = observe[col].fillna(observe[col].mean()) # 평균으로 결측치 채우기

# 특성 공학
observe['rain_today'] = np.where(observe['rain'] > 0, 1, 0)
observe['rain_yesterday'] = (observe['rain_today'].shift(1) == 1).astype(int).fillna(0)
observe['rain_tomorrow'] = (observe['rain_today'].shift(-1) == 1).astype(int).fillna(0) # 예측 목표
observe['diff_temp'] = observe['max_temp'] - observe['min_temp']
observe['diff_humid'] = observe['max_humid'] - observe['min_humid']
observe['month_number'] = observe['date'].dt.month

# 정규화
norm_col = ['ev_transpiration','rain','pan_ev','max_temp','min_temp','max_humid','min_humid','wind','solar', 'diff_temp', 'diff_humid']
scaler = MinMaxScaler()
observe[norm_col] = scaler.fit_transform(observe[norm_col])

# 훈련/검증 데이터 분리
x_col = ['ev_transpiration','max_temp','min_temp','max_humid','min_humid','wind','solar','month_number', 'diff_temp', 'diff_humid', 'rain_yesterday']
X = observe[x_col]
y = observe['rain_tomorrow']

# 마지막 행은 rain_tomorrow가 NaN이므로 제외 (shift(-1) 때문)
X = X.iloc[:-1]
y = y.iloc[:-1]

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=10)

print("X_train shape:", X_train.shape)
print("y_train shape:", y_train.shape)
print("X_val shape:", X_val.shape)
print("y_val shape:", y_val.shape)
```

#### 2. 로지스틱 회귀 모델 학습 (Logistic Regression Model Training)

전처리된 데이터를 사용하여 로지스틱 회귀 모델을 학습시킵니다. `scikit-learn` 라이브러리의 `LogisticRegression` 클래스를 사용하면 간단하게 모델을 구축하고 훈련할 수 있습니다.

**예제: 모델 학습 코드 스니펫**

```python
from sklearn.linear_model import LogisticRegression

# 로지스틱 회귀 모델 초기화 및 학습
log_reg_model = LogisticRegression(random_state=10, solver='liblinear') # 작은 데이터셋에 적합한 solver
log_reg_model.fit(X_train, y_train)

# 모델 예측
y_pred = log_reg_model.predict(X_val)
y_pred_proba = log_reg_model.predict_proba(X_val)[:, 1] # 양성 클래스(비 올 확률) 예측
```

#### 3. 모델 평가 및 해석 (Model Evaluation and Interpretation)

분류 모델의 성능을 평가하는 데는 다양한 지표가 사용됩니다. 특히 불균형 데이터셋(예: 비 오는 날보다 맑은 날이 훨씬 많은 경우)에서는 정확도 외에 정밀도, 재현율, F1 점수, ROC-AUC와 같은 지표들이 중요합니다.

*   **혼동 행렬 (Confusion Matrix)**: 모델의 예측이 실제 값과 얼마나 일치하는지 시각적으로 보여줍니다. TP, TN, FP, FN 값을 통해 모델의 오류 유형을 파악할 수 있습니다.
*   **정확도 (Accuracy)**: 전체 예측 중 올바르게 예측한 비율.
*   **정밀도 (Precision)**: 모델이 양성으로 예측한 것 중 실제 양성인 비율. FP를 줄이는 데 중요.
*   **재현율 (Recall)**: 실제 양성인 것 중 모델이 올바르게 양성으로 예측한 비율. FN을 줄이는 데 중요.
*   **F1 점수 (F1-Score)**: 정밀도와 재현율의 조화 평균. 두 지표의 균형을 평가.
*   **ROC 곡선 (Receiver Operating Characteristic Curve)**: 모델의 임계값 변화에 따른 TPR(재현율)과 FPR(오탐률)의 관계를 보여주는 곡선.
*   **AUC (Area Under the Curve)**: ROC 곡선 아래 면적. 0과 1 사이의 값으로, 모델의 전반적인 분류 성능을 나타냅니다. 1에 가까울수록 좋은 모델입니다.

**예제: 모델 평가 코드 스니펫 및 결과**

```python
from sklearn.metrics import confusion_matrix, classification_report, roc_curve, roc_auc_score
import matplotlib.pyplot as plt
import seaborn as sns

# 혼동 행렬
cm = confusion_matrix(y_val, y_pred)
print("Confusion Matrix:\n", cm)

plt.figure(figsize=(4, 3))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', cbar=False,
            xticklabels=['Not Rain', 'Rain'], yticklabels=['Not Rain', 'Rain'])
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()

# 분류 보고서
print("\nClassification Report:")
print(classification_report(y_val, y_pred, target_names=['Not Rain', 'Rain']))

# ROC 곡선 및 AUC
fpr, tpr, thresholds = roc_curve(y_val, y_pred_proba)
auc_score = roc_auc_score(y_val, y_pred_proba)

print(f"\nAUC Score: {auc_score:.4f}")

plt.figure(figsize=(6, 5))
plt.plot(fpr, tpr, color='darkorange', lw=2, label=f'ROC curve (AUC = {auc_score:.2f})')
plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic (ROC) Curve')
plt.legend(loc="lower right")
plt.grid(True)
plt.show()
```

**결과 해석**:

*   **혼동 행렬**: `[[TN, FP], [FN, TP]]` 형태로 출력됩니다. 예를 들어, `[[100, 5], [10, 85]]`라면, 맑은 날 100개를 맞추고 5개를 비 온다고 잘못 예측했으며, 비 오는 날 85개를 맞추고 10개를 맑다고 잘못 예측했음을 의미합니다.
*   **분류 보고서**: 정밀도, 재현율, F1 점수 등을 통해 모델이 각 클래스를 얼마나 잘 예측하는지 상세히 파악할 수 있습니다. 특히 'Rain' 클래스(양성 클래스)에 대한 지표를 주의 깊게 살펴봅니다.
*   **AUC Score**: 0.5에 가까우면 무작위 예측과 다를 바 없으며, 1에 가까울수록 모델의 분류 성능이 우수함을 나타냅니다.

#### 4. PCA를 이용한 데이터 시각화 (PCA for Data Visualization)

날씨 데이터는 습도, 기온, 풍속 등 여러 특성을 가지는 고차원 데이터입니다. 이를 2차원으로 축소하여 시각화하면 데이터의 분포, 클래스 간 분리 가능성, 이상치 등을 직관적으로 파악하는 데 도움이 됩니다. PCA는 데이터의 분산을 최대한 보존하면서 차원을 축소하는 강력한 도구입니다.

**예제: PCA 시각화 코드 스니펫 및 결과 해석**

```python
from sklearn.decomposition import PCA

# PCA 적용 (2개의 주성분으로 축소)
pca = PCA(n_components=2)
principalComponents = pca.fit_transform(X) # 전체 데이터 X에 PCA 적용

# PCA 결과를 데이터프레임으로 변환
principalDf = pd.DataFrame(data = principalComponents,
                           columns = ['principal component 1', 'principal component 2'])

# 실제 라벨(rain_tomorrow)과 PCA 결과를 결합
finalDf = pd.concat([principalDf, y.reset_index(drop=True)], axis = 1)

# 2D PCA 시각화
plt.figure(figsize=(8, 6))
sns.scatterplot(x='principal component 1', y='principal component 2', hue='rain_tomorrow', data=finalDf, palette='viridis', alpha=0.7)
plt.title('2D PCA of Weather Data (Rain Tomorrow)')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.grid(True)
plt.show()

# 각 주성분이 설명하는 분산 비율
print("\nExplained variance ratio by principal components:")
print(pca.explained_variance_ratio_)
print(f"Total explained variance by 2 components: {pca.explained_variance_ratio_.sum():.4f}")
```

**결과 해석**:

*   **산점도**: 2차원 평면에 데이터 포인트들이 어떻게 분포되어 있는지, 그리고 '비 오는 날'과 '비 안 오는 날' 클래스가 얼마나 잘 분리되는지 시각적으로 확인할 수 있습니다. 만약 두 클래스가 명확하게 분리되어 있다면 로지스틱 회귀와 같은 선형 분류기가 좋은 성능을 보일 가능성이 높습니다. 반대로, 두 클래스가 많이 겹쳐 있다면 선형 모델만으로는 분류가 어려울 수 있음을 시사합니다.
*   **설명된 분산 비율**: `pca.explained_variance_ratio_`는 각 주성분이 원본 데이터의 전체 분산 중 얼마를 설명하는지 나타냅니다. 이 값이 높을수록 적은 수의 주성분으로도 원본 데이터의 많은 정보를 보존할 수 있음을 의미합니다.

### 결론

이 Capstone 프로젝트를 통해 우리는 날씨 예측이라는 실제 문제에 머신러닝의 기본 개념들을 적용해 보았습니다. 데이터 전처리부터 로지스틱 회귀 모델 학습, 다양한 평가 지표를 통한 성능 분석, 그리고 PCA를 활용한 데이터 시각화까지의 전 과정을 경험함으로써, 이론적 지식을 실제 데이터에 적용하는 실질적인 능력을 함양할 수 있었습니다. 이러한 경험은 앞으로 더 복잡한 머신러닝 문제에 도전하는 데 든든한 기반이 될 것입니다.