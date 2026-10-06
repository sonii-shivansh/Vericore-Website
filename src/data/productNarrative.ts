export const productNarrative = {
  promise: 'Let AI change code. Verify what actually changed.',
  loop: ['Prepare', 'Change', 'Verify'],
  pillars: [
    {
      label: 'Prepare',
      title: 'Create the verification boundary',
      description: 'Build deterministic repository evidence and persist the intended change boundary before implementation.',
      href: 'architecture/',
      action: 'See the evidence',
    },
    {
      label: 'Change',
      title: 'Let the developer or agent implement',
      description: 'Use the prepared plan and contract as the boundary for the normal coding workflow or AI coding agent.',
      href: 'how-to-use/#prepare',
      action: 'See the workflow',
    },
    {
      label: 'Verify',
      title: 'Verify the original contract',
      description: 'Detect unexpected paths, stale state, contract tampering, and other verification failures without regenerating the boundary.',
      href: 'demo/',
      action: 'See the proof',
    },
  ],
} as const;
