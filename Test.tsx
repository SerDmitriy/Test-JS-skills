import React, { useCallback, useEffect, useState } from 'react';
import dataJSON from './data.json';
import FolderIcon from '@material-ui/icons/Folder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core';
import classNames from 'classnames';
import { COLORS } from 'constants/UI/colors.constants';

const myParseInt = src => {
  let res: string = '';
  let index = 0;
  while (!isNaN(src[index])) {
    res += src[index++];
  }
  if (!res.length) {
    return NaN;
  }
  return +res;
};

console.log('=====================');
console.log('123 ===', myParseInt('123'));
console.log('123 + 5 ===', myParseInt('123') + 5);
console.log('1.34 ===', myParseInt('1.34'));
console.log('1f23 ===', myParseInt('1f23'));
console.log('f23 ===', myParseInt('f23'));

//------------------------------------------------------------------

const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const arr2 = [
  [1, 2, 2, 3],
  [4, 5, 7, 6],
  [7, 8, 0, 9],
  [17, 18, 10, 19],
];

const showSpiral = array => {
  let res = [];
  let maxI = array.length - 1;
  let maxJ = array[0].length - 1;
  // let maxD = array[0][0].length
  let minI = 0;
  let minJ = 0;
  const moveRight = () => {
    for (let i = minI; i <= maxI; i++) {
      res.push(array[minJ][i]);
    }
    minJ++;
  };
  const moveLeft = () => {
    for (let i = maxI; i >= minI; i--) {
      res.push(array[maxJ][i]);
    }
    maxJ--;
  };
  const moveDown = () => {
    for (let j = minJ; j <= maxJ; j++) {
      res.push(array[j][maxI]);
    }
    maxI--;
  };
  const moveUp = () => {
    for (let j = maxJ; j >= minJ; j--) {
      res.push(array[j][minI]);
    }
    minI++;
  };

  const movements = [moveRight, moveDown, moveLeft, moveUp];
  while (minI <= maxI && minJ <= maxJ) {
    movements.forEach(f => f());
  }
  console.log('=====================');
  console.log(array);
  console.log('result  ===', res);
};
showSpiral(arr1);
showSpiral(arr2);
//------------------------------------------------------------------

interface IProps {
  data: any;
  isPropsOpen: boolean;
}

interface IFileProps {
  name: string;
  mime: string;
  isOpen: boolean;
}

const expandedFolders = ['Common7', 'IDE', 'DIA SDK', 'bin', 'amd64', 'include', 'Samples', 'DIA2Dump'];

const Folder: React.FC<IProps> = ({ data, isPropsOpen }) => {
  const classes = useTestStyles();
  const [isOpen, setIsOpen] = useState<boolean>(expandedFolders.includes(data.name));
  const handleOpen = useCallback(() => setIsOpen(isOpen => !isOpen), [setIsOpen]);

  if (!data.children) {
    return <File name={data.name} mime={data.mime} isOpen={isPropsOpen} />;
  }

  return (
    <div className={classNames({ [classes.flex]: true, [classes.hide]: !isPropsOpen })}>
      <FolderIcon fontSize={'small'} color={'primary'} />
      <span onClick={handleOpen}>{`${data.name} >`}</span>
      <div>
        {data.children.map((child: any, i: number) => (
          <Folder key={data.name + i} data={child} isPropsOpen={isOpen} />
        ))}
      </div>
    </div>
  );
};

const File: React.FC<IFileProps> = ({ name, mime, isOpen }) => {
  const classes = useTestStyles();

  return (
    <div className={classNames({ [classes.hide]: !isOpen })}>
      <FileCopyIcon fontSize={'small'} color={'secondary'} />
      <span>{`${name}__${mime}`}</span>
    </div>
  );
};

export const FolderTree: React.FC = () => {
  const classes = useTestStyles();

  return (
    <>
      <h2>Folder tree</h2>
      <div>Opened folder list: {expandedFolders.join(', ')}</div>
      {dataJSON.map((data, index) => (
        <div key={index} className={classes.flex}>
          <Folder data={data} isPropsOpen={true} />
        </div>
      ))}
    </>
  );
};

const useTestStyles = makeStyles(() =>
  createStyles({
    flex: {
      display: 'flex',
      backgroundColor: 'rgba(209,219,224, .2)',
    },
    hide: {
      display: 'none',
    },
    searchIcon: {
      color: `${COLORS.greyBlueIcon}`,
      border: `1px solid silver`,
    },
  })
);
