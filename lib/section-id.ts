const getSectionId = (title: string, idSeed: string) =>
  `${idSeed}-${title.toLowerCase().replace(/[^a-z0-9]/gi, '-')}`;

export default getSectionId;
