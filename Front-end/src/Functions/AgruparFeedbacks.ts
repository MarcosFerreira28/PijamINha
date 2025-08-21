import type { FeedbackType } from "../Types/Feedback";

export default function agruparFeedbacks(feedbacks: FeedbackType[]) : FeedbackType[][] {
    const result = [];
    const maiores = [];

    for (let i = 0; i < feedbacks.length; i += 1) {
        if (feedbacks[i].rating >= 4) {
            maiores.push(feedbacks[i]);
        }
    }

    for (let i = 0; i < maiores.length; i += 3) {
        result.push(maiores.slice(i, i + 3));
    }

    return result;
}