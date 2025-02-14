export type SurveyType = 'MULTIPLE_CHOICE' | 'BALANCE';

export type SurveyParams = {
  get: {
    bundleId: number;
  };
};

export type SurveySubmissionId = {
  submissionId: number;
};

export type SurveyOption = {
  id: number;
  optionContents: string;
};

export type HistoryResponse = {
  bundleId: number;
  isCompleted: boolean;
  surveyHistoryDetails: SurveySubmissionId[];
  nextSurveyIndex: number;
};

export type TodaySurveyResponse = {
  id: number;
  contents: string;
  surveyType: SurveyType;
  options: SurveyOption[];
};

export type SurveySubmission = {
  optionId: number;
  comment: string;
};

export type SurveySubmissionParams = {
  surveyId: number;
  survey: SurveySubmission;
};

export type SurveySubmissionResponse = {
  surveyRecords: CompletedSurveySubmission[];
};

export type CompletedSurveySubmission = {
  submissionId: number;
  question: string;
  answer: string;
  retrospective: string;
  submittedAt: string;
};
