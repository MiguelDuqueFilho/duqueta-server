import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

export default {
  async update(request: Request, response: Response) {
    const { id } = request.params;

    const fileLocationOrig = path.join(__dirname, '..', 'images', `${id}.png`);
    const fileLocationDest = path.join(__dirname, '..', 'images', `${id}.old`);
    const fileLocationOrigPb = path.join(
      __dirname,
      '..',
      'images',
      `${id}pb.png`
    );
    const fileLocationDestPb = path.join(
      __dirname,
      '..',
      'images',
      `${id}pb.old`
    );

    try {
      fs.access(fileLocationOrig, fs.constants.F_OK, (error) => {
        if (!error) {
          fs.copyFileSync(fileLocationOrig, fileLocationDest);
          fs.copyFileSync(fileLocationOrigPb, fileLocationDestPb);
          fs.unlinkSync(fileLocationOrig);
          fs.unlinkSync(fileLocationOrigPb);

          return response.send('Imagem invalidada!!');
        } else {
          console.log(error);
          return response.send('Imagem não encontrada');
        }
      });
    } catch (error) {
      return response.send('Imagem não encontrada!!');
    }
  },
};

// class ImagesController {
//   update(req: Request, res: Response) {
//     console.log(req);
//     return res.json();
// const id = req
// try {
//   const fileLocationOrig = path.join(
//     'src/images',
//     `${req.id}.png}`;
//   const fileLocationDest = path.join(
//     'src/images',
//     `${req.id}.old}`
//   );

//   await fs.access(fileLocationOrig, (error: Error) => {
//     if (!error) {
//         fs.copyFileSync(fileLocationOrig, fileLocationDest);

//     } else {
//       return res.send('Imagem nÃ£o encontrada!!');
//     }
//   });

//     fs.access(fileLocationOrig, (error: Error) => {
//     if (!error) {
//       fs.unlinkSync(fileLocationOrig, function (error: Error) {
//         if (error) {
//           console.log('Arquivo nÃ£o deletado');
//         }
//       });
//     }
//   });
// } catch (err) {
//   return res.status(500).json(errorHandler(err));
// }
//   }
// }
