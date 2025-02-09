export type SurveySubmissionId = {
  submissionId: number;
};
export type SurveyResponse = {
  bundleId: number;
  isCompleted: boolean;
  surveyHistoryDetails: SurveySubmissionId[];
  nextSurveyIndex: number;
};
