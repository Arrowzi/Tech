export type Quest = {
    id: number,
    title: string,
    variants: string[],
    correctVariant: number,
    img: string
};

export type FunProps = {
    onClickVar: (index: number) => void;
}

export type StepProps = {
    step: number;
}

export type ResultProps = {
    correctVar: number;
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Operator = '+' | '-' | '×' | '÷';

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};